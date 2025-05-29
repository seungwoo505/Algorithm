package Algo_0507;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.math.BigInteger;
import java.util.StringTokenizer;

public class 엄청난부자2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        BigInteger n = new BigInteger(st.nextToken()), m = new BigInteger(st.nextToken());

        StringBuilder sb = new StringBuilder();

        sb.append(n.divide(m))
                .append("\n")
                .append(n.remainder(m));

        System.out.println(sb);
    }
}
