package Algo_0327;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class 영화감독숌 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int num = Integer.parseInt(br.readLine());
        int numbering = 666;
        int count = 0;
        while(count < num){
            if(Integer.toString(numbering).contains("666")){
                count++;
                if(count == num){
                    System.out.println(numbering);
                    break;
                }
            }
            numbering++;
        }
    }
}
