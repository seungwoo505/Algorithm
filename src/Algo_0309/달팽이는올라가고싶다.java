package Algo_0309;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 달팽이는올라가고싶다 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int A = Integer.parseInt(st.nextToken()), B = Integer.parseInt(st.nextToken()), V = Integer.parseInt(st.nextToken());

        int v = V - A;

        System.out.println((v / (A - B)) + ((v % (A - B) == 0 ? 0 : 1)) + 1);
    }
}
