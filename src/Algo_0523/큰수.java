package Algo_0523;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class 큰수 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String s = br.readLine();
        int MOD = 20000303;
        int result = 0;
        for (int i = 0; i < s.length(); i++) {
            result = (int) (((long) result * 10 + (s.charAt(i) - '0')) % MOD);
        }

        System.out.println(result);
    }
}
