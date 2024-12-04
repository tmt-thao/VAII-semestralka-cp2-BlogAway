import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">

      <div className="container post-detail__container">

        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/sdfsdf/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/sdfsdf/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>

        <h1>This is the post title!</h1>

        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias necessitatibus totam, et corrupti in voluptate deserunt ea magnam hic, pariatur inventore quo porro, nulla ex saepe error ad quibusdam tempore repellendus? Quibusdam non nesciunt dolores nobis quisquam illo asperiores!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo perferendis nesciunt aliquam veniam, saepe voluptas rerum beatae, a illum earum deleniti magni repellat accusantium porro voluptate explicabo iusto consequuntur neque recusandae veritatis. Dolores nisi tenetur quasi nesciunt natus eligendi odit temporibus perferendis repellat, harum nemo quia optio debitis minima fugit officiis ducimus ratione, ad doloremque?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, perspiciatis! Reiciendis, nobis id voluptatum, aut officia facere recusandae eum nostrum molestias, laudantium provident sint ad harum illo nisi voluptatem repudiandae ipsam iste minima? Reprehenderit culpa dolor dolorem inventore veritatis aliquid, autem facilis in, magni possimus rem nesciunt iure quos itaque natus, est numquam porro nostrum quisquam tempore cumque? Quo ut iure illo quia a! Qui atque ab doloribus ratione aliquid unde modi? Molestiae pariatur amet itaque libero, sequi, non suscipit, tempore consequatur numquam autem cumque aspernatur excepturi distinctio. Nemo culpa accusantium omnis quae optio odio eius quasi nostrum praesentium voluptatum porro, quidem magni neque quaerat ducimus. Est sint consequuntur nihil reiciendis?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quia autem blanditiis voluptas non iure vel praesentium quasi hic dicta?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptate. Consequuntur repellendus explicabo adipisci eos. Odit eum magni placeat vitae praesentium, repudiandae commodi rerum, deserunt libero soluta eveniet! Officia eos ipsam sit quidem atque fugit, error est dolores harum porro, molestias a doloribus alias officiis temporibus blanditiis recusandae facilis dolore facere quos laboriosam distinctio nisi quo! Vel, molestias! Veniam et molestiae totam corrupti. Provident, odit doloribus aut maiores eos, tempora praesentium fugit recusandae exercitationem, minus molestiae nisi culpa porro harum laudantium maxime error iure. Veniam quos rerum aperiam atque numquam nulla impedit, fuga quaerat facere harum et illo dolore alias excepturi inventore culpa illum molestias architecto, nisi beatae totam! Repellat, aperiam unde delectus perspiciatis non possimus odit ab veritatis voluptates optio corporis corrupti! Ab libero culpa sed saepe, corporis error quasi, tenetur perspiciatis minima laborum reprehenderit sit. Ratione, numquam nulla quas cupiditate iusto veniam velit similique eos et sequi quo incidunt esse maxime ipsam. Architecto, magni cupiditate illo animi quibusdam unde maiores ut reiciendis optio rerum corrupti earum, fuga voluptates! Qui dolorum consequatur aliquid molestiae quaerat repellendus sapiente optio ipsam alias placeat, omnis fugiat illum repellat tempora odit itaque. Blanditiis temporibus beatae facilis corporis cum omnis ab eum, ipsum minus.</p>

      </div>

    </section>
  )
}

export default PostDetail