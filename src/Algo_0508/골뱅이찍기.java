package Algo_0508;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class 골뱅이찍기 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        StringBuilder sb = new StringBuilder();

        for (int n = 0; n < N; n++) {
            for (int i = 0; i < N; i++) {
                for (int j = 0; j < 5; j++) {
                    sb.append("@");
                }
            }
            sb.append("\n");
        }

        for (int n = 0; n < N; n++) {
            for (int i = 0; i < 4; i++) {
                for (int k = 0; k < N; k++) {
                    sb.append("@");
                }
                sb.append("\n");
            }
        }

        System.out.println(sb.toString().trim());
    }
}
