package Algo_0420;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 고급여관 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int[] A = new int[] { Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken()) };

        st = new StringTokenizer(br.readLine(), " ");
        int[] B = new int[] { Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken()) };

        int hpA = A[1] / B[0] + (A[1] % B[0] == 0 ? 0 : 1);
        int hpB = B[1] / A[0] + (B[1] % A[0] == 0 ? 0 : 1);

        System.out.println(hpA < hpB ? "PLAYER B" : hpA > hpB ? "PLAYER A" : "DRAW");
    }
}
