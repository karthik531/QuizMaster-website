import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
public class Login extends HttpServlet
	{
	public void service(HttpServletRequest req,HttpServletResponse res)throws ServletException,IOException
	{
		PrintWriter out=res.getWriter();
		Connection con=null;
		Statement st=null;
		ResultSet rs;
		int found=0;
		try
		{
			Class.forName("org.postgresql.Driver");
			con=DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres","postgres","root");
			st=con.createStatement();
			rs=st.executeQuery("SELECT \"Name\",\"Mobile\",\"Password\" from \"MyTable\"");
			String name=req.getParameter("NAME");
			String pswd=req.getParameter("PASSWORD");
			String mob=name;
			while(rs.next())
			{
				if(rs.getString(1).equals(name)||rs.getString(2).equals(name))
				{
					if(rs.getString(3).equals(pswd))
					{
						out.print("<html><head><title>Login</title><style>body{background-size:cover;}.login{border-style:solid;width:300px;height:350px;margin:50px auto;font-family:cursive;background-color:#F2EEEE;}</style></head>");
						out.print("<body background=\"LoginBg1.jpg\"><h1 align=\"center\" style=\"font-family:cursive;color:white;font-size:300%\" >Quiz Login</h1><div class=\"login\"><form>Signed in Successfully.To enter quiz <a href=\"questions.html\">Click here</a></form></div></body></html>");
						found=1;
						break;
					}
					else
					{
						out.print("<html><head><title>Login</title><style>body{background-size:cover;}.login{border-style:solid;width:300px;height:350px;margin:50px auto;font-family:cursive;background-color:#F2EEEE;}</style></head>");
						out.print("<body background=\"LoginBg1.jpg\"><h1 align=\"center\" style=\"font-family:cursive;color:white;font-size:300%\" >Quiz Login</h1><div class=\"login\"><form>The Password you entered is incorrect. <a href=\"Login form.html\">Click here</a></form></div></body></html>");
						found=1;
						break;
					}

				}
				

			}
			if(found==0)
				{
						out.print("<html><head><title>Login</title><style>body{background-size:cover;}.login{border-style:solid;width:300px;height:350px;margin:50px auto;font-family:cursive;background-color:#F2EEEE;}</style></head>");
						out.print("<body background=\"LoginBg1.jpg\"><h1 align=\"center\" style=\"font-family:cursive;color:white;font-size:300%\" >Quiz Login</h1><div class=\"login\"><form>The Username or Mobile number is incorrect. Renter. <a href=\"Login form.html\">Click here</a></form></div></body></html>");
				}
			out.close();
			con.close();
		}
		catch (SQLException se)
		{
			out.print(se);

		}
		catch(ClassNotFoundException ce)
		{
			out.print(ce);
		}
	}

}