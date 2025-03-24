import { useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./components/ui/card";

function Result() {
  // URL 파라미터에서 searchTerm 값을 가져옵니다
  const { searchTerm } = useParams<{ searchTerm: string }>();
  console.log(searchTerm);
  return (
    <div className="Result grid gap-10 w-full h-full px-40 justify-items-center">
      <Card className="grid grid-cols-2 w-[80%]">
        <CardHeader>
          <CardTitle className="flex flex-col gap-3">
            <div className="grid grid-cols-2">
              <p>영화 이름</p>
              <p>⭐️ 7.5</p>
            </div>
            <p className="text-sm">개봉일 2025-03-24</p>
          </CardTitle>
          <div className="w-64 h-64">
            <img className="w-full h-full object-contain" src={""} alt="" />
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <div>줄거리</div>
            <div>
              영화ㄹ홀홀홀홓ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ
              내용
            </div>
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}

export default Result;
