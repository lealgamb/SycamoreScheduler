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
   * Updates the user's information on the database.
   * @param email the user's email
   * @param updates the key-value pairs of the user's information to update
   * @return false if the user's information is unable to be updated in the database
   */
  public static boolean updateUser(String email, Map<String, String> updates) {
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
    //TODO
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
   * Return's the classes for the specified degree program.
   * @param degreeProgramName the degree program name for which to get classes for
   * @return null if unable to get classes from the database for the specified degree program name
   */
  public static ArrayList<ArrayList<String>> getClasses(String degreeProgramName) {
    //TODO
  }
}
