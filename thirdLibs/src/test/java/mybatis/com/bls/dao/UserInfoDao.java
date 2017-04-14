package mybatis.com.bls.dao;

 
import java.util.HashMap;
import java.util.List;

import mybatis.com.bls.bean.UserBean;

public interface UserInfoDao {
	
	
	//��ѯ����
	public int  getUserCount();
	//��ѯ�����û���Ϣ
	public List<UserBean> getUserInfo();
	//���������ѯ�û���Ϣ
	public UserBean getUserByName(HashMap<String, String> map);
	
}
