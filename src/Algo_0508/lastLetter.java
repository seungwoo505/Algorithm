package Algo_0508;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class lastLetter {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        String S = br.readLine();

        System.out.println(S.charAt(N - 1) == 'G' ? S.substring(0, N - 1) : S + 'G');
    }
}
