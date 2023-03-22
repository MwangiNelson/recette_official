import React, { useEffect, useState, useRef } from 'react'
import { collection,query } from 'firebase/firestore'
import { db } from '../firebase'



const Tests = () => {

    function updateData (){
        const f_db =  query(collection(db, 'recipes'));
        f_db.get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.update({
                preferences: []
              });
            });
          });
    }

    useEffect(()=>{
        updateData()
    },[])


    return (
        <div>
            {/* <LoginForm /> */}
        </div>
    )
}

export default Tests