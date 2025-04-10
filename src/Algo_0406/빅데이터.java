package Algo_0406;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class 빅데이터 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        int N = Integer.parseInt(br.readLine());
        String data = br.readLine();
        
        String security = data.replace("bigdata", "");
        String bigdata = data.replace("security", "");

        int secNum = security.length() / 8;
        int bigNum = bigdata.length() / 7;

        System.out.println(secNum < bigNum ? "bigdata?" : secNum > bigNum ? "security!" : "bigdata? security!");
    }
}
