import { ClassNames } from '@emotion/react';
import axios from 'axios';
import { sort_restaurants, get_cuisines, get_restaurants, query_restaurants, search_restaurants } from '../../../api/api';


export const getRestaurant = async() => {

  const response =  await axios({
        method: 'get',
        url: `${get_restaurants}/`,
      })
        .then(function (response) {
          return response.data.data
        });
  
    console.log("response", response)
  if(response){
    const data =  response.map((val) => (
        {
        name : val.name,
        cuisines : val.cuisines,
        rating : {
          text :  val.rating_text,
          color : val.rating_color,
          points : val.agg_rating,

            },
        votes : val.votes,
        features : {
          "has_table" : val.has_table_booking,
          "has_online" : val.has_online_booking
        },
        currency : val.currency,
        avg_cost : val.avg_cost_for_two,
        address : val.address

      }
      
      )
    )

    console.log("data", data)
    return data  

  }

  return [];


}

export const query = async(query, search) => {

  const filter = JSON.stringify(query)
  console.log("query12", query)
  const response =  await axios({
    method: 'GET',
    url: `${query_restaurants}/${search}/${filter}/`,
 
  })
    .then(function (response) {
      return response.data.data
    });

    if(response){
      const data =  response.map((val) => (
          {
          name : val.name,
          cuisines : val.cuisines,
          rating : {
            text :  val.rating_text,
            color : val.rating_color,
            points : val.agg_rating,
  
              },
          votes : val.votes,
          features : {
            "has_table" : val.has_table_booking,
            "has_online" : val.has_online_booking
          },
          currency : val.currency,
          avg_cost : val.avg_cost_for_two,
          address : val.address
  
        }
        
        )
      )
  
      console.log("data", data)
      return data 
  
    }
    return []
}



export const searchRestaurant = async(query) => {


    const response =  await axios({
        method: 'get',
        url: `${search_restaurants}/${query}/`,
      })
        .then(function (response) {
          return response.data.data
        });

        if(response){
          const data =  response.map((val) => (
              {
              name : val.name,
              cuisines : val.cuisines,
              rating : {
                text :  val.rating_text,
                color : val.rating_color,
                points : val.agg_rating,
      
                  },
              votes : val.votes,
              features : {
                "has_table" : val.has_table_booking,
                "has_online" : val.has_online_booking
              },
              currency : val.currency,
              avg_cost : val.avg_cost_for_two,
              address : val.address
      
            }
            
            )
          )
      
          console.log("data", data)
          return data
      
        }
        return []

}


export const getCuisines = async() => {

  const data = await axios({
    method : "get",
    url: `${get_cuisines}/`,

  }).then((response) => {
    return response.data.data;
  }).catch((err) => {
    // alert(err)
  })


  if(data){

    return data
  }
  
  return false

}



export const sortRestaurant = async(query, order) => {


  const response =  await axios({
      method: 'get',
      url: `${sort_restaurants}/${order}/${query}`,
    })
      .then(function (response) {
        return response.data.data
      });

      if(response){
        const data =  response.map((val) => (
            {
            name : val.name,
            cuisines : val.cuisines,
            rating : {
              text :  val.rating_text,
              color : val.rating_color,
              points : val.agg_rating,
    
                },
            votes : val.votes,
            features : {
              "has_table" : val.has_table_booking,
              "has_online" : val.has_online_booking
            },
            currency : val.currency,
            avg_cost : val.avg_cost_for_two,
            address : val.address
          }
          
          )
        )
    
        console.log("data", data)
        return data
    
      }
      return []

}

