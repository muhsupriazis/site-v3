export function BookCard({ title, imgUrl } : any) {
  return (
      <div className="">
        <img
          src={imgUrl}
          alt="Book cover"
        />
      </div>
  )
}