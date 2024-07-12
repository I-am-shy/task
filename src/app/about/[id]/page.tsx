"use client" //客户端跳转，不会像服务端请求页面
import { useParams } from "next/navigation"

export default function () {
  const { id } = useParams()
  // console.log(id)
  return(
    <div>
      <div>id --- {id}</div>
    </div>
  )
}