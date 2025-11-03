
/**
 * 
 * 문제의 메모리 제한이 4MB인데 JS의 console.log를 사용한 순간 메모리 사용량이 8MB가 넘는 메모리 사용량이 나와서 메모리 초과가 나오게되므로
 * JS로는 문제를 푸는 것이 불가능하기 때문에
 * Java로 문제를 푼다.
 * 
 */

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class 내려가기 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        String[] cost = br.readLine().split(" ");
        int[] max = { Integer.parseInt(cost[0]), Integer.parseInt(cost[1]), Integer.parseInt(cost[2]) };
        int[] min = { Integer.parseInt(cost[0]), Integer.parseInt(cost[1]), Integer.parseInt(cost[2]) };

        for (int n = 2; n <= N; n++) {
            cost = br.readLine().split(" ");
            int newMax1 = Math.max(max[0], max[1]) + Integer.parseInt(cost[0]);
            int newMax2 = Math.max(Math.max(max[0], max[1]), max[2]) + Integer.parseInt(cost[1]);
            int newMax3 = Math.max(max[1], max[2]) + Integer.parseInt(cost[2]);

            int newMin1 = Math.min(min[0], min[1]) + Integer.parseInt(cost[0]);
            int newMin2 = Math.min(Math.min(min[0], min[1]), min[2]) + Integer.parseInt(cost[1]);
            int newMin3 = Math.min(min[1], min[2]) + Integer.parseInt(cost[2]);

            max[0] = newMax1;
            max[1] = newMax2;
            max[2] = newMax3;
            min[0] = newMin1;
            min[1] = newMin2;
            min[2] = newMin3;
        }

        StringBuilder sb = new StringBuilder();

        sb.append(Math.max(max[0], Math.max(max[1], max[2])))
                .append(" ")
                .append(Math.min(min[0], Math.min(min[1], min[2])));
        System.out.println(sb);
    }
}
