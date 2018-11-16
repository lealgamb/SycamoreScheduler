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

import driver.JDBCDriver;

/**
 * Servlet implementation class ClassesServlet
 */
@WebServlet("/ClassesServlet")
public class ClassesServlet extends HttpServlet {
  private static final long serialVersionUID = 1L;
  
  /**
   * Handles requests for classes.
   */
  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    // Get the writer
    PrintWriter pw = response.getWriter();
    System.out.println("in classes servlet");
    // Get the parameter
    String degreeProgramName = request.getParameter("degreeProgramName");
    
    // Check if the parameter is null and send an error message if so
    if (degreeProgramName == null) {
      pw.write(HttpServletResponse.SC_BAD_REQUEST);
      pw.flush();
    }
    else {
      ArrayList<ArrayList<String>> classes = JDBCDriver.getClasses(degreeProgramName);
      
      // Check if the classes can be retrieved
      if (classes != null) {
        // Successfully retrieved the classes
        
        // Communicate with the front-end
        String classesJSON = new Gson().toJson(classes);
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        pw.write(classesJSON);
        pw.flush();
      }
      else {
        // Failed to retrieve classes
        pw.write(HttpServletResponse.SC_BAD_REQUEST);
        pw.flush();
      }
    }
  }

}
