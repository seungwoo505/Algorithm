package Algo_0403;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class 팬들에게둘러싸인홍준 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringBuilder sb = new StringBuilder();

        sb.append(":fan::fan::fan:\n")
          .append(":fan:")
          .append(":")
          .append(br.readLine())
          .append(":")
          .append(":fan:\n")
          .append(":fan::fan::fan:");
        
        System.out.println(sb);

    }
}
