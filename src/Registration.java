import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
public class Registration extends HttpServlet
	{
	public void service(HttpServletRequest req,HttpServletResponse res)throws ServletException,IOException
	{
		PrintWriter out=res.getWriter();
		Connection con=null;
		PreparedStatement pst=null;
		Statement st=null;
		ResultSet rs;
		int there=0;
		
			try{
			res.setContentType("text/html");
			Class.forName("org.postgresql.Driver");
			String name=req.getParameter("USERNAME");
			String mobile1=req.getParameter("CODE");
			String mobile2=req.getParameter("MOBILE");
			String mobile=mobile1+mobile2;
			String email=req.getParameter("EMAIL");
			String pswd=req.getParameter("PASSWORD");
			con=DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres","postgres","root");
			st=con.createStatement();
			rs=st.executeQuery("SELECT \"Name\",\"Mobile\",\"Password\" from \"MyTable\"");
			while(rs.next())
			{
				if((rs.getString(1).equals(name)||rs.getString(2).equals(mobile))&&rs.getString(3).equals(pswd))
				{
					out.print("<html><head><title>Registration</title><style>body{background-size:cover;}.MAIN{border-style:solid;height:500px;width:300px;background-color:#F2EEEE;margin:50px auto;font-family:cursive;}</style></head>");
			out.print("<body background=\"LoginBg3.jpg\"><h1 align=center style=\"font-family:cursive;font-size:300%;color:white\">Quiz Registration</h1><form><div class=\"MAIN\">You have already registered.<a href=\"Login form.html\">Click here</a></div></form></body></html>");
					there=1;
					break;
				}
			}
			
			if(there==0){
			pst=con.prepareStatement("INSERT INTO \"MyTable\" VALUES(?,?,?,?)");
			
			pst.setString(1,name);
			pst.setString(2,mobile);
			pst.setString(3,email);
			pst.setString(4,pswd);
			int i=pst.executeUpdate();
			out.print("<html><head><title>Registration</title><style>body{background-size:cover;}.MAIN{border-style:solid;height:500px;width:300px;background-color:#F2EEEE;margin:50px auto;font-family:cursive;}</style></head>");
			out.print("<body background=\"LoginBg3.jpg\"><h1 align=center style=\"font-family:cursive;font-size:300%;color:white\">Quiz Registration</h1><form><div class=\"MAIN\"><h1>Registered</h1></div></form></body></html>");}
			out.close();
			con.close();
			pst.close();
			}
			catch(SQLException se)
			{
				out.print(se);
			}
			catch(ClassNotFoundException cs)
			{
				out.print(cs);
			}
			
		
	}
}
