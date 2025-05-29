package Algo_0523;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class 피갤컵 {
    public static void main(String[] args) throws IOException {
        int year = 2024, month = 1;

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        month += N * 7;

        year += month / 12;
        month %= 12;

        if (month == 0) {
            year--;
            month = 12;
        }

        StringBuilder sb = new StringBuilder();

        sb.append(year).append(" ").append(month);

        System.out.println(sb);
    }
}
