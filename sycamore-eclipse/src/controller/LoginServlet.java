package controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import driver.JDBCDriver;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
  private static final long serialVersionUID = 1L;
  
  /**
   * Handles user login requests.
   */
  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    // Get all of the parameters
    String email = request.getParameter("email");
    String password = request.getParameter("password");
	  // Check if any of the parameters are null and send an error message if so
    if (email == null || password == null) {
      response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Missing login parameters.");
    }
    else {
      // Check if the user can be authenticated
      if (JDBCDriver.isUserRegistered(email, password)) {
        // Successfully authenticated user
        
        // Store the email as a session attribute
        request.getSession().setAttribute("email", email);
        
        // Communicate with the front-end
        response.setStatus(HttpServletResponse.SC_OK);
      }
      else {
        // Failed to authenticate the user
        response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Failed to authenticate user.");
      }
    }
  }

}
