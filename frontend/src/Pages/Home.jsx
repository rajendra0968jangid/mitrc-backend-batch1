import React, { useEffect, useState } from 'react'

function Home() {
  let [blogData, setBlogData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch("http://localhost:5000/blog/get-all-blog");
      const jsonResponse = await response.json();
      setBlogData(jsonResponse?.data);
    }
    fetchApi();
  }, [])
  console.log(blogData);


  return (
    <>
      <div className='container'>
        <div className='row'>
          {blogData.map((item) => (
            <div className='col-12 col-sm-6 col-lg-3 mb-4'>
              <div className="card" style={{ width: "100%" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default Home
