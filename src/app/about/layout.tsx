import Nav from "./_nav/Nav"

export default function ({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <>
      <Nav></Nav>
      <h2 className="">二级路由容器</h2>
      <div>
        {children /*子路由内容 */}
      </div>
    </>

  )
}