import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderRatingsList = () => {
    const {ratingsList} = props
    return ratingsList.map(rating => {
      const {activeRatingId, changeRating} = props
      const onClickRating = () => changeRating(rating.ratingId)
      const ratingClassName =
        activeRatingId === rating.ratingId ? `and-up active-rating` : `and-up`
      return (
        <li
          onClick={onClickRating}
          key={rating.ratingId}
          className="rating-item"
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-img"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderCategory = () => {
    const {categoryOptions} = props
    return categoryOptions.map(eachCategory => {
      const {changeCategory, activeCategoryId} = props
      const onClickCategory = () => changeCategory(eachCategory.categoryId)
      const categoryClassName =
        activeCategoryId === eachCategory.categoryId
          ? `category-name active-category-name`
          : `category-name`
      return (
        <li
          className="category-item"
          onClick={onClickCategory}
          key={eachCategory.categoryId}
        >
          <p className={categoryClassName}>{eachCategory.name}</p>
        </li>
      )
    })
  }

  const renderCategoryListView = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">{renderCategory()}</ul>
    </>
  )

  const renderReviewsListView = () => (
    <>
      <h1 className="rating-heading">Ratings</h1>
      <ul className="ratings-list">{renderRatingsList()}</ul>
    </>
  )

  const onSearchInputChange = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const renderSearchInputView = () => {
    const {searchInput} = props
    return (
      <div className="search-input-container">
        <input
          type="search"
          onChange={onSearchInputChange}
          value={searchInput}
          placeholder="Search"
          onKeyDown={onEnterSearchInput}
          className="search-input"
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const {filters} = props

  return (
    <div className="filters-group-container">
      {renderSearchInputView()}
      {renderCategoryListView()}
      {renderReviewsListView()}
      <button onClick={filters} type="button" className="clear-filters-btn">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
