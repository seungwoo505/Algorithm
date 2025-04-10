package Algo_0403;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 합 {
    static final int[] num = new int[]{0, 1, 3, 6, 10, 15, 21, 28, 36, 45};
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int L = Integer.parseInt(st.nextToken()), U = Integer.parseInt(st.nextToken());

        System.out.println(sum(U) - sum(L - 1));
    }

    static Long sum(int n){
        long count = 0;
        int cnt = 0;
        int target = n % 10;
        n /= 10;

        count += num[target];
        while(n > 0){
            target = n % 10;
            n /= 10;
            cnt++;
            for(int i = 1; i <= target; i++){
                count += (num[9] * 10 * cnt);
            }
        }

        return count;
    }
}