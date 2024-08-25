import { BookCard } from "./components/book-card"

export const metadata = {
  title: 'Book',
  description: 'Books I have read and recommend',
}

const listBook = [
  {
  title: 'Atomic Habits',
  imgUrl: 'https://books.google.co.id/books/publisher/content?id=1bm0DwAAQBAJ&hl=id&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U3GdzfquaNBpEh6-I_K0W-m08rQFg&w=1280'
  },
  {
  title: 'Zero to One',
  imgUrl: 'https://cdn.gramedia.com/uploads/items/9786020321486_Zero-To-One_GiqDeE9.jpg'
  },
  {
  title: 'Berani tidak disukai',
  imgUrl: 'https://books.google.co.id/books/publisher/content?id=GV68DwAAQBAJ&hl=id&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U0vYajuiyv4Xg1TTLqaFswEG71_6w&w=1280'
  },
  {
    title: 'Filosofi Teras',
    imgUrl: 'https://s3-ap-southeast-1.amazonaws.com/ebook-previews/45496/168985/1.jpg'
  },
  {
    title: 'How to Win Friends and Influence People',
    imgUrl: 'https://gpu.id/data-gpu/images/img-book/93952/623221015.jpg'
  },
  {
    title: 'The Subtle Art of Not Giving a F*ck',
    imgUrl: 'https://ebooks.gramedia.com/ebook-covers/34319/image_highres/ID_HCO2016MTH09TSAONGAF.jpeg'
  }
]

export default function Page() {
  return (
    <section>
      <div className='border-b mb-4'>
        <h1 className="font-semibold md:text-4xl text-2xl md:mb-8 mb-4 tracking-tighter">Books</h1>
        <p className="mb-4 font-light md:text-base text-[15px] leading-relaxed dark:text-[#a3a3a3] text-[#52525b]">Books I have read and recommend.</p>
      </div>
      <div>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {listBook.map((book) => (
            <BookCard title={book.title} imgUrl={book.imgUrl} />
          ))}
        </div>
      </div>
    </section>
  )
}
