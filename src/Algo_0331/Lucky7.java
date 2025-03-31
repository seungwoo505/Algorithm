package Algo_0331;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Lucky7 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int num = Integer.parseInt(br.readLine());

        if(num % 7 != 0 && !Integer.toString(num).contains("7")){
            System.out.println(0);
        }else if(num % 7 == 0 && !Integer.toString(num).contains("7")){
            System.out.println(1);
        }else if(num % 7 != 0 && Integer.toString(num).contains("7")){
            System.out.println(2);
        }else{
            System.out.println(3);
        }
    }
}