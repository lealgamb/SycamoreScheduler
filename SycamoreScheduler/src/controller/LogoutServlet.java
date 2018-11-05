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
    // Get the writer
    PrintWriter pw = response.getWriter();
    
    // Set all session attributes to null and send a success message when done
    //TODO
    
    pw.write(HttpServletResponse.SC_OK);
    pw.flush();
  }
  
}
