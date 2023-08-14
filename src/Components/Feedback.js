import React from 'react'

export default function Feedback() {
    return (
        <div className='container feedback'>
            <div className="input-group mb-3">
  <select className="form-select" id="inputGroupSelect02">
    <option selected="">Choose...</option>
    <option value={0}>Recommendation</option>
    <option value={1}>User Inteface</option>
    <option value={2}>Difficulty to use</option>
    <option value={3}>Problem in Tools</option>
  

  </select>
  
</div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Mail id (Optional)"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        Description
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={3}
                        defaultValue={""}
                        placeholder='Descipt your problem'
                    />
                </div>
            

        </div>
    )
}
