package driver;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Map;

public class JDBCDriver {
  private static Connection conn = null;
  private static ResultSet rs = null;
  private static PreparedStatement ps = null;
  //TODO String to connect to the database
  // private static final String CONN_STRING = "";
  
  /**
   * Connects to the database.
   */
  private static void connect() {
    //TODO
  }
  
  /**
   * Closes the database connection.
   */
  private static void close() {
    //TODO
  }
  
  /**
   * Adds a user trying to register to the database.
   * @param email the user's email
   * @param fName the user's first name
   * @param lName the user's last name
   * @param password the user's password
   * @param academicPrograms the list of the the user's academic programs
   * @return false if user is unable to be added to the database
   */
  public static boolean addUser(String email, String fName, String lName, String password, ArrayList<String> academicPrograms) {
    //TODO
  }
  
  /**
   * Verifies if a user trying to login is registered in the database.
   * @param email the user's email
   * @param password the user's password
   * @return false if the user is not authenticated against the database
   */
  public static boolean isUserRegistered(String email, String password) {
    //TODO
  }
  
  /**
   * Returns the user's registered information on the database and requested schedule
   * @param email the user's email
   * @param degreeProgramName the degree program name for which to get the schedule
   * @return null if the specified user information or the requested schedule cannot be found
   */
  public static ArrayList<ArrayList<String>> getUserInformation(String email, String degreeProgramName) {
    //TODO
  }
  
  /**
   * Returns the primary major for the specified user.
   * @param email the user's email
   * @return null if the use does not have a registered major
   */
  public static String getPrimaryMajor(String email) {
    //TODO
  }
  
  /**
   * Updates the user's information on the database.
   * @param email the user's email
   * @param updates the key-value pairs of the user's information to update
   * @return false if the user's information is unable to be updated in the database
   */
  public static boolean updateUser(String email, Map<String, String> updates) {
    //TODO may not be necessary
  }
  
  /**
   * Updates the user's specified degree program.
   * @param email the user's email
   * @param degreeProgramName the name of the degree program to be changed to
   * @param category the type of degree program: primary/secondary major/minor
   * @return false if the user's specified degree program is unable to be updated in the database
   */
  public static boolean updateDegreeProgram(String email, String degreeProgramName, String category) {
    //TODO
  }
  
  /**
   * Remove the user's specified degree program if and only if it is not the primary major.
   * @param email the user's email
   * @param degreeProgramName the name of the degree program to be removed
   * @param category the type of degree program: primary/secondary major/minor
   * @return false if the user's specified degree program is unable to be removed from the database
   */
  public static boolean removeDegreeProgram(String email, String degreeProgramName, String category) {
    //TODO
  }
  
  /**
   * Updates the user's password if and only if it is a new password. 
   * @param email the user's email
   * @param oldPassword the user's old password used to authenticate the request
   * @param newPassword the user's new password
   * @return false if unable to update the user's password
   */
  public static boolean updatePassword(String email, String oldPassword, String newPassword) {
    //TODO
  }
  
  /**
   * Returns the user's schedule for the requested degree program.
   * @param email the user's schedule
   * @param degreeProgramName the degree program name for which to get the schedule
   * @return null if unable to get the user's schedule
   */
  public static ArrayList<ArrayList<String>> getSchedule(String email, String degreeProgramName) {
    //TODO
  }
  
  /**
   * Updates the user's schedule on the database.
   * @param email the user's email
   * @param degreeProgramName the degree program name for which to update the schedule
   * @param updates the key-value pairs of the user's schedule information to update
   * @return false if the user's schedule is unable to be updated in the database
   */
  public static boolean updateSchedule(String email, String degreeProgramName, Map<String, String> updates) {
    //TODO may not be necessary
  }
  
  /**
   * Deletes the user's schedule on the database.
   * @param email the user's email
   * @param degreeProgramName the degree program name for which to update the schedule
   * @return false if the user's schedule is unable to be deleted from the database
   */
  public static boolean deleteSchedule(String email, String degreeProgramName) {
    //TODO
  }
  
  /**
   * Adds a class to the specified degree program for the specified user.
   * @param email the user's email
   * @param className the name of the class to be added
   * @param degreeProgramName the degree program name for which to add the class to
   * @return false if the class is unable to be added
   */
  public static boolean addClassToSchedule(String email, String className, String degreeProgramName) {
    //TODO
  }
  
  /**
   * Removes a class from the specified degree program for the specified user.
   * @param email the user's email
   * @param className the name of the class to be removed
   * @param degreeProgramName the degree program name from which to remove the class from
   * @return false if the class is unable to be removed
   */
  public static boolean removeClassFromSchedule(String email, String className, String degreeProgramName) {
    //TODO
  }
  
  /**
   * Returns the classes for the specified degree program.
   * @param degreeProgramName the degree program name for which to get classes for
   * @return null if unable to get classes from the database for the specified degree program name
   */
  public static ArrayList<ArrayList<String>> getClasses(String degreeProgramName) {
    //TODO
  }
  
}
