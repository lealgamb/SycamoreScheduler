package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import driver.JDBCDriver;

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
    // Get the parameter
    String profileEmail = request.getParameter("profileEmail");
    
    // Check if the parameter is null and send an error message if so
    if (profileEmail == null) {
      response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Email parameter for profile is missing.");
    }
    else {
      // Attempt to retrieve user's information
      Map<String, String> userInformation = JDBCDriver.getUserInformation(profileEmail);
      
      // Check if the user information
      if (userInformation != null) {
        // Successfully retrieved the user's information
        
        // Communicate with the front-end
        String userInformationJSON = new Gson().toJson(userInformation);
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setStatus(HttpServletResponse.SC_OK);
        // Get the writer
        PrintWriter pw = response.getWriter();
        pw.write(userInformationJSON);
        pw.flush();
      }
      else {
        // Failed to retrieve the user's information
        response.sendError(HttpServletResponse.SC_BAD_REQUEST, 
            "Failed to retrieve user's information from database.");
      }
    }
  }
  
  /**
   * Handles profile update requests.
   */
  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    // Get the main parameters
    String profileEmail = request.getParameter("profileEmail");
    String action = request.getParameter("action");
    
    // Check if the parameters are null and send an error message if so
    if (profileEmail == null || action == null) {
      response.sendError(HttpServletResponse.SC_BAD_REQUEST, 
          "Missing profile update parameters.");
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
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, 
                "Missing parameters to update or remove degree program.");
          }
          else {
            // Update the user's degree program
            if (action.equals("updateDegreeProgram")) {
              // Attempt to update the user's degree program
              if (JDBCDriver.updateDegreeProgram(profileEmail, degreeProgramName, category)) {
                // Successfully updated the user's degree program
                response.setStatus(HttpServletResponse.SC_OK);
              }
              else {
                // Unable to update the user's degree program
                response.sendError(HttpServletResponse.SC_BAD_REQUEST, 
                    "Failed to update the user's degree program.");
              }
            }
            // Remove the user's degree program
            else if (action.equals("removeDegreeProgram")) {
              // Unable to remove primary major
              if (category.equals("primary major")) {
                response.sendError(HttpServletResponse.SC_BAD_REQUEST, 
                    "Unable to remove primary major.");
              }
              // Valid category to remove
              else {
                // Attempt to remove the user's degree program
                if (JDBCDriver.removeDegreeProgram(profileEmail, category)) {
                  // Successfully remove the user's degree program
                  response.setStatus(HttpServletResponse.SC_OK);
                }
                else {
                  // Unable to remove the user's degree program
                  response.sendError(HttpServletResponse.SC_BAD_REQUEST, 
                      "Failed to remove " + category + " from " + profileEmail + "'s database.");
                }
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
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, 
                "Missing password update parameters.");
          }
          else {
            // Attempt to update the user's password
            if (JDBCDriver.updatePassword(profileEmail, oldPassword, newPassword)) {
              // Successfully updated the user's password
              response.setStatus(HttpServletResponse.SC_OK);
            }
            else {
              // Unable to update the user's password
              response.sendError(HttpServletResponse.SC_BAD_REQUEST, 
                  "Failed to update " + profileEmail + "'s password in the database.");
            }
          }
        }
      }
      else {
        // Other users should not be updating another user's profile so send an error message
        response.sendError(HttpServletResponse.SC_BAD_REQUEST, 
            "Permission denied to update another user's profile.");
      }
    }
  }

}
