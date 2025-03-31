package Algo_0331;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class CASIO {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        String N = st.nextToken(), M = st.nextToken();

        System.out.println(N.equals(M) ? 1 : 0);
    }
}
