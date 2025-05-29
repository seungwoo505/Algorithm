package Algo_0523;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class 스위트콘가격구하기 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int B = Integer.parseInt(br.readLine());

        System.out.println((int) Math.ceil(B / 1.1));
    }
}
