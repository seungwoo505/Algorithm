package Algo_0524;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 찬반투표 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        int approved = 0, rejected = 0, invalid = 0;

        for (int n = 0; n < N; n++) {
            int student = Integer.parseInt(st.nextToken());

            if (student == 1)
                approved++;
            else if (student == -1)
                rejected++;
            else
                invalid++;
        }

        System.out.println(
                invalid * 2 >= N ? "INVALID"
                        : approved > rejected ? "APPROVED"
                                : "REJECTED");
    }
}
