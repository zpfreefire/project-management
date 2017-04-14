package mybatis.com.bls.dao.impl;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;



import mybatis.com.bls.bean.UserBean;
import mybatis.com.bls.dao.UserInfoDao;
import mybatis.com.bls.util.MybatisSqlSession;

public class UserInfoDaoImpl implements UserInfoDao {
	
	//��ѯ����
	public int  getUserCount(){
	   int count=0;
	   try{
		   UserInfoDao userInfoDao=MybatisSqlSession.getSqlSession().getMapper(UserInfoDao.class);
			count=userInfoDao.getUserCount();
	   }finally{
		   MybatisSqlSession.getSqlSession().close();
	   }
		return count;
	}
	//��ѯ�����û���Ϣ
	 
	public List<UserBean> getUserInfo(){
		List<UserBean> listuser=new ArrayList<UserBean>();
		/*SqlSessionFactory sqlSessionFactory=null;  //���õ�һЩ����д����com.bls.util.MybatisSqlSession��
		String resource="mybatis-configuration.xml";
		Reader reader=null;
		try {
			reader = Resources.getResourceAsReader(resource);
		} catch (IOException e) {
			e.printStackTrace();
		}
		sqlSessionFactory=new SqlSessionFactoryBuilder().build(reader);
		SqlSession sqlSession=sqlSessionFactory.openSession();*/
		try{
			UserInfoDao userInfoDao=MybatisSqlSession.getSqlSession().getMapper(UserInfoDao.class);
			listuser=userInfoDao.getUserInfo();
		}finally{
			MybatisSqlSession.getSqlSession().close();
		}
		return listuser;
	}
	//���������ѯ�û���Ϣ
	public UserBean getUserByName(HashMap<String, String> map){
	//	Map<String, String> map=new HashMap<String, String>();
		map.put("username", "kk");
		UserBean userBean=new UserBean();
		/*SqlSessionFactory sqlSessionFactory=null;
		String resource="mybatis-configuration.xml";
		Reader reader=null;
		try {
			reader = Resources.getResourceAsReader(resource);
		} catch (IOException e) {
			e.printStackTrace();
		}
		sqlSessionFactory=new SqlSessionFactoryBuilder().build(reader);
		SqlSession sqlSession=sqlSessionFactory.openSession();
		*/
		try{
			UserInfoDao userInfoDao=MybatisSqlSession.getSqlSession().getMapper(UserInfoDao.class);
			userBean=userInfoDao.getUserByName(map);
		}finally{
			MybatisSqlSession.getSqlSession().close();
		}
		return userBean;
	}
	
	public static void main(String[] args) {
		Map<String, String> map=new HashMap<String, String>();
		UserInfoDaoImpl userInfoDaoImpl=new UserInfoDaoImpl();
		UserBean userBean=new UserBean();
		List<UserBean> listuser=new ArrayList<UserBean>();
		System.out.println();
		System.out.println("---------------------");
		int count=userInfoDaoImpl.getUserCount();
		System.out.println("数据总条数"+count);
		System.out.println("---------------------");
		listuser=userInfoDaoImpl.getUserInfo();
		for(UserBean ub:listuser){
			System.out.println("用户名:"+ub.getUsername()+"      "+"密码:"+ub.getPassword());
		}
		System.out.println("---------------------");
		System.out.println();
		userBean=userInfoDaoImpl.getUserByName((HashMap<String, String>) map);
		System.out.println("�û���"+userBean.getUsername()+"     "+"���룺"+userBean.getPassword());
	}
	
}
