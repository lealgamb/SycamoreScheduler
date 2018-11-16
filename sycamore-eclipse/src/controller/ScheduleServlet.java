package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import driver.JDBCDriver;

/**
 * Servlet implementation class ScheduleServlet
 */
@WebServlet("/ScheduleServlet")
public class ScheduleServlet extends HttpServlet {
  private static final long serialVersionUID = 1L;
	
  /**
   * Handles schedule retrieval requests.
   */
  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {    
    // Get the parameter
    String email = request.getParameter("email");
    
    // Check if the parameter is null and send an error message if so
    if (email == null) {
      response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Missing course plan email parameter.");
    }
    else {
      Map<String, ArrayList<ArrayList<String>>> schedule = JDBCDriver.getSchedule(email);
      
      // Check if the schedule can be retrieved
      if (schedule != null) {
        // Successfully retrieved the schedule
        
        // Communicate with the front-end
        String scheduleJSON = new Gson().toJson(schedule);
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        // Get the writer
        PrintWriter pw = response.getWriter();
        pw.write(scheduleJSON);
        pw.flush();
      }
      else {
        // Failed to retrieve classes
        response.sendError(HttpServletResponse.SC_BAD_REQUEST, 
            "Failed to retreive classes for " + email + " from the database.");
      }
    }
  }
  
  /**
   * Handles schedule update requests.
   */
  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    // Get the writer
    PrintWriter pw = response.getWriter();
    
    // Get all of the main parameters
    String profileEmail = request.getParameter("profileEmail");
    String action = request.getParameter("action");
    
    // Check if the parameters are null and send an error message if so
    if (profileEmail == null || action == null) {
      pw.write(HttpServletResponse.SC_BAD_REQUEST);
      pw.flush();
    }
    else {
      // Only allow the logged in user to make changes to his/her schedule
      if (profileEmail.equals((String)request.getSession().getAttribute("email"))) {
        // Get the remaining parameters
        String className = request.getParameter("className");
        String degreeProgramName = request.getParameter("degreeProgramName");
        
        // Check if the parameters are null and send an error message if so
        if (className == null || degreeProgramName == null) {
          pw.write(HttpServletResponse.SC_BAD_REQUEST);
          pw.flush();
        }
        else {
          // Add a class
          if (action.equals("add")) {
            // Attempt to add the class
            if (JDBCDriver.addClassToSchedule(profileEmail, className, degreeProgramName)) {
              // Successfully added the class
              pw.write(HttpServletResponse.SC_OK);
              pw.flush();
            }
            else {
              // Unable to add the class
              pw.write(HttpServletResponse.SC_BAD_REQUEST);
              pw.flush();
            }
          }
          // Remove a class
          else if (action.equals("remove")) {
            // Attempt to remove the class
            if (JDBCDriver.removeClassFromSchedule(profileEmail, className, degreeProgramName)) {
              // Successfully removed the class
              pw.write(HttpServletResponse.SC_OK);
              pw.flush();
            }
            else {
              // Unable to remove the class
              pw.write(HttpServletResponse.SC_BAD_REQUEST);
              pw.flush();
            }
          }
        }
      }
      else {
        // Other users should not be updating schedules on other's profile pages so send an error message
        pw.write(HttpServletResponse.SC_BAD_REQUEST);
        pw.flush();
      }
    }
  }

}
