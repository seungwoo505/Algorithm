package Algo_0423;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class n3_1수열 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int Cn = Integer.parseInt(br.readLine());
        int n = 1;

        while (Cn != 1) {
            n++;
            if (Cn % 2 == 0) {
                Cn = Cn / 2;
            } else {
                Cn = 3 * Cn + 1;
            }
        }

        System.out.println(n);
    }
}
