package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class RegisterServlet
 */
@WebServlet("/RegisterServlet")
public class RegisterServlet extends HttpServlet {
  private static final long serialVersionUID = 1L;
  
  /**
   * Handles user registration requests.
   */
  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    // Get the writer
    PrintWriter pw = response.getWriter();
    
    // Get all of the parameters
    String email = request.getParameter("email");
    String fName = request.getParameter("fName");
    String lName = request.getParameter("lName");
    String password = request.getParameter("password");
    String major1 = request.getParameter("major1");
    String major2 = request.getParameter("major2");
    String minor1 = request.getParameter("minor1");
    String minor2 = request.getParameter("minor2");
	  
    // Check if any of the parameters are null and send an error message if so
    // At minimum, major1 must have a value
    if (email == null || fName == null || lName == null || password == null || major1 == null) {
      pw.write(HttpServletResponse.SC_BAD_REQUEST);
      pw.flush();
    }
    else {
      // Add the degree program names to the academicPrograms list
      ArrayList<String> academicPrograms = new ArrayList<String>();
      academicPrograms.add(major1); // At this point we know major1 is not null
      if (major2 != null) {
        academicPrograms.add(major2);
      }
      if (minor1 != null) {
        academicPrograms.add(minor1);
      }
      if (minor2 != null) {
        academicPrograms.add(minor2);
      }
	    
      // Attempt to register the user
      if (JDBCDriver.addUser(email, fName, lName, password, academicPrograms)) {
        // Successfully registered user
        
        // Store the email as a session attribute
        request.getSession().setAttribute("email", email);
        
        // Communicate with the front-end
        pw.write(HttpServletResponse.SC_OK);
        pw.flush();
      }
      else {
        // Failed to register user
        pw.write(HttpServletResponse.SC_BAD_REQUEST);
        pw.flush();
      }
    }
  }

}
