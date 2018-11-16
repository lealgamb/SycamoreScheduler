package controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class LogoutServlet
 */
@WebServlet("/LogoutServlet")
public class LogoutServlet extends HttpServlet {
  private static final long serialVersionUID = 1L;
  
  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    // Set the email session attribute to null
    request.getSession().setAttribute("email", null);
    
    // Communicate with the front-end after email is null
    if (request.getSession().getAttribute("email") == null) {
      response.setStatus(HttpServletResponse.SC_OK);
    }
    else {
      response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Failed to log out user.");
    }
  }
  
}
