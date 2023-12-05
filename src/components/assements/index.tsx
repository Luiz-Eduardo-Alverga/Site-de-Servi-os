import { Star } from 'phosphor-react'
import { Assessments } from './style'
import { useState } from 'react'

export function Assements() {
  const [likeCount, setLikeCount] = useState(0)

  function incrementAssessments() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <Assessments>
      <div onClick={incrementAssessments}>
        <Star color="yellow" size={25}></Star>
        <span>{likeCount} avaliações</span>
      </div>
    </Assessments>
  )
}
