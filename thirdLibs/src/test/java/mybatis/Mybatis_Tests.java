package mybatis;

import static org.junit.Assert.*;


import java.io.Reader;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;



public class Mybatis_Tests {
	private static SqlSessionFactory sqlSessionFactory;  

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		String resource="mybatis/mybatis-config.xml";
		Reader reader=Resources.getResourceAsReader(resource);
		sqlSessionFactory=new SqlSessionFactoryBuilder().build(reader);
		reader.close();
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
	}

	@Test
	public void test(){
		try{
			Student student=(Student)getSqlSession().selectOne("mybatis.dao.Query.QueryAll",1);
			System.out.println(student.getAge());
			assertEquals("小明", student.getName()); 
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			getSqlSession().close();
		}
		
	}
	
	private static SqlSession getSqlSession(){
		SqlSession ss= sqlSessionFactory.openSession();
		return ss;
	}

}
