package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class ProfileServlet
 */
@WebServlet("/ProfileServlet")
public class ProfileServlet extends HttpServlet {
  private static final long serialVersionUID = 1L;
  
  /**
   * Handles profile retrieval requests.
   */
  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    // Get the writer
    PrintWriter pw = response.getWriter();
    
    // Get all of the parameters
    String profileEmail = request.getParameter("profileEmail");
    String degreeProgramName = request.getParameter("degreeProgramName");
    
    // Check if the parameters are null and send an error message if the email is null
    if (profileEmail == null) {
      pw.write(HttpServletResponse.SC_BAD_REQUEST);
      pw.flush();
    }
    else {
      // By default select major 1 if degree program name is unspecified
      if (degreeProgramName == null) {
        degreeProgramName = JDBCDriver.getPrimaryMajor(profileEmail);
        // If the user does not have a registered major send an error message
        if (degreeProgramName == null) {
          pw.write(HttpServletResponse.SC_BAD_REQUEST);
          pw.flush();
        }
        else {
          ArrayList<ArrayList<String>> userInformationAndSchedule = 
              JDBCDriver.getUserInformation(profileEmail, degreeProgramName);
          
          // Check if the user information and schedule can be retrieved
          if (userInformationAndSchedule != null) {
            // Successfully retrieved the user's information and schedule
            
            // Communicate with the front-end
            String userInformationAndScheduleJSON = 
                new Gson().toJson(userInformationAndSchedule);
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            pw.write(userInformationAndScheduleJSON);
            pw.flush();
          }
          else {
            // Failed to retrieve the user information and schedule
            pw.write(HttpServletResponse.SC_BAD_REQUEST);
            pw.flush();
          }
        }
      }
    }
  }
  
  /**
   * Handles profile update requests.
   */
  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    // Get the writer
    PrintWriter pw = response.getWriter();
    
    // Get the main parameters
    String profileEmail = request.getParameter("profileEmail");
    String action = request.getParameter("action");
    
    // Check if the parameters are null and send an error message if so
    if (profileEmail == null || action == null) {
      pw.write(HttpServletResponse.SC_BAD_REQUEST);
      pw.flush();
    }
    else {
      // Only allow the logged in user to make changes to his/her profile
      if (profileEmail.equals((String)request.getSession().getAttribute("email"))) {
        // Update or remove the user's degree program
        if (action.equals("updateDegreeProgram") || action.equals("removeDegreeProgram")) {
          // Get the remaining parameters
          String degreeProgramName = request.getParameter("degreeProgramName");
          // Category can be: primaryMajor, secondaryMajor, primaryMinor, or secondaryMinor
          String category = request.getParameter("category");
          
          // Check if the parameters are null and send an error message if so
          if (degreeProgramName == null || category == null) {
            pw.write(HttpServletResponse.SC_BAD_REQUEST);
            pw.flush();
          }
          else {
            // Update the user's degree program
            if (action.equals("updateDegreeProgram")) {
              // Attempt to update the user's degree program
              if (JDBCDriver.updateDegreeProgram(profileEmail, degreeProgramName, category)) {
                // Successfully updated the user's degree program
                pw.write(HttpServletResponse.SC_OK);
                pw.flush();
              }
              else {
                // Unable to update the user's degree program
                pw.write(HttpServletResponse.SC_BAD_REQUEST);
                pw.flush();
              }
            }
            // Remove the user's degree program
            else if (action.equals("removeDegreeProgram")) {
              // Attempt to remove the user's degree program
              if (JDBCDriver.removeDegreeProgram(profileEmail, degreeProgramName, category)) {
                // Successfully remove the user's degree program
                pw.write(HttpServletResponse.SC_OK);
                pw.flush();
              }
              else {
                // Unable to remove the user's degree program
                pw.write(HttpServletResponse.SC_BAD_REQUEST);
                pw.flush();
              }
            }
          }
        }
        // Update the user's password
        else if (action.equals("updatePassword")) {
          // Get the remaining parameters
          String oldPassword = request.getParameter("oldPassword");
          String newPassword = request.getParameter("newPassword");
          
          // Check if the parameters are null and send an error message if so
          if (oldPassword == null || newPassword == null) {
            pw.write(HttpServletResponse.SC_BAD_REQUEST);
            pw.flush();
          }
          else {
            // Attempt to update the user's password
            if (JDBCDriver.updatePassword(profileEmail, oldPassword, newPassword)) {
              // Successfully updated the user's password
              pw.write(HttpServletResponse.SC_OK);
              pw.flush();
            }
            else {
              // Unable to update the user's password
              pw.write(HttpServletResponse.SC_BAD_REQUEST);
              pw.flush();
            }
          }
        }
      }
      else {
        // Other users should not be updating another user's profile so send an error message
        pw.write(HttpServletResponse.SC_BAD_REQUEST);
        pw.flush();
      }
    }
  }

}
