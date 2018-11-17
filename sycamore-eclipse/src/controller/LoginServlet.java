package controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

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
    // Get the writer
    PrintWriter pw = response.getWriter();
    
    // Edit the response
    response.setContentType("application/json");
    response.setCharacterEncoding("UTF-8");
    
    // Get all of the parameters
    String email = request.getParameter("email");
    String password = request.getParameter("password");
	  // Check if any of the parameters are null and send an error message if so
    if (email == null || password == null) {
      response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
      String error = "Missing login parameters.";
      pw.write(new Gson().toJson(error));
      pw.flush();
    }
    else {
      // Check if the user can be authenticated
      if (JDBCDriver.isUserRegistered(email, password)) {
        // Successfully authenticated user
        
        // Store the email as a session attribute
        request.getSession().setAttribute("email", email);
        
        // Communicate with the front-end
        response.setStatus(HttpServletResponse.SC_OK);
        String success = "Successfully authenticated the user.";
        pw.write(new Gson().toJson(success));
        pw.flush();
      }
      else {
        // Failed to authenticate the user
        response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        String error = "Failed to authenticate user.";
        pw.write(new Gson().toJson(error));
        pw.flush();
      }
    }
  }

}
