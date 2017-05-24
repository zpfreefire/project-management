package basic.http.client;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HeaderIterator;
import org.apache.http.HttpEntity;
import org.apache.http.HttpStatus;
import org.apache.http.NameValuePair;
import org.apache.http.ParseException;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.config.RequestConfig.Builder;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;

public class HttpClient {
	/**
	 * set XML-formed String to HTTP server by post method
	 * @param url
	 * @param xmlData
	 * @return
	 * @throws IOException
	 */
	public String sendXMLDataByPost(String url, String xmlData) throws IOException{
		CloseableHttpResponse httpResponse = null;
		String result = null;
		try {
		//����http�ͻ���
		CloseableHttpClient httpclient = HttpClients.createDefault();
		//����http����
		HttpPost httpPost = new HttpPost(url);
		//���ò���
		Builder requestConfigBuilder = RequestConfig.custom();
		requestConfigBuilder.setConnectionRequestTimeout(3000)
		.setConnectTimeout(2000).setSocketTimeout(3000).setMaxRedirects(5);
		httpPost.setConfig(requestConfigBuilder.build());
		//��������ʵ����
		//HttpEntity requestEntity = new StringEntity(resultXml, "UTF-8");
		//������ֵ������
		List<NameValuePair> nvps = new ArrayList<NameValuePair>();
		nvps.add(new BasicNameValuePair("xml", xmlData));
		httpPost.setEntity(new UrlEncodedFormEntity(nvps, "UTF-8"));
		//����httpPost����
		httpResponse = httpclient.execute(httpPost);
		HttpEntity httpEntity = httpResponse.getEntity();
		int status = httpResponse.getStatusLine().getStatusCode();
		if(status==HttpStatus.SC_OK){
			result = EntityUtils.toString(httpEntity, "UTF-8");
		}else{
			readHttpResponse(httpResponse);
		}
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		}finally{
			httpResponse.close();
		}
		return result;
	}
	
	public static String readHttpResponse(CloseableHttpResponse httpResponse) throws ParseException, IOException {
		StringBuilder builder = new StringBuilder();
		//��ȡ��Ӧ��Ϣʵ����
		HttpEntity httpEntity = httpResponse.getEntity();
		builder.append("status:"+httpResponse.getStatusLine());
		builder.append("header:");
		HeaderIterator iterator = httpResponse.headerIterator();
		while(iterator.hasNext()){
			builder.append("\t"+iterator.next());
		}
		if(httpEntity != null){
			String responseString = EntityUtils.toString(httpEntity);
			builder.append("response length:"+responseString.length());
			builder.append("response content:"+responseString.replace("\r\n", ""));
		}
		return builder.toString();
	}

	public String getXMLString() {  
        String XML_HEADER = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";  
        StringBuffer sb = new StringBuffer();  
        sb.append(XML_HEADER);  
        sb.append("<dataPacket version=\"1.0\">");  
        sb.append("<request>");  
        sb.append("QueryWaitCount");  
        sb.append("</request>");  
        sb.append("<queueNumber>");  
        sb.append("1001");  
        sb.append("</queueNumber>");  
        sb.append("</dataPacket>");  
        // ����String��ʽ  
        return sb.toString();  
    } 
	
	public static void main(String[] args) throws Exception {  
		HttpClient client = new HttpClient();  
        //����XML���ݵ�����  
        String result = client.sendXMLDataByPost("http://localhost:", client.getXMLString());  
        System.out.println(result); 
	}
}
