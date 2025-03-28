package Algo_0327;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Hashing {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        char[] hash = br.readLine().toCharArray();

        long result = 0;
        long pow = 1;
        int MOD = 1234567891;

        for (int i = 0; i < N; i++) {
            int value = hash[i] - 'a' + 1;
            result = (result + value * pow) % MOD;
            pow = (pow * 31) % MOD;
        }

        System.out.println(result);
    }
}