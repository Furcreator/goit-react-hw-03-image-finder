import React, { Component } from 'react';
import SearchBar from './Searchbar/Searchbar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import PropTypes from 'prop-types';
class App extends Component {
  state = {
    imagesArray: [],
    query: '',
    showModal: false,
    imageLink: '',
    page: 1,
    showBtnLoadMore: false,
    isLoading: false,
  };

  async getFromApi(text, page) {
    const API_KEY = `34923936-72b1522875746ba4d44cc2019`;
    const BASE_URL = 'https://pixabay.com/api/';
    const searchParams = new URLSearchParams({
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
    });
    const URL = `${BASE_URL}?key=${API_KEY}&q=${text}&page=${page}&${searchParams}`;

    try {
      this.setState({ isLoading: true });
      const response = await axios.get(URL);
      if (response.data.totalHits < 1) {
        toast.error(`За запитом "${this.state.query}" результатів нема!`);
        this.setState({ query: '', page: 1, showBtnLoadMore: false });
        return;
      } else if (response.data.hits.lenght !== 0) {
        this.setState(prev => ({
          imagesArray: [...prev.imagesArray, ...response.data.hits],
        }));
      }
      let totalNumberOfImages = response.data.totalHits;
      let alredyDownloadImages = 12 * this.state.page;

      if (alredyDownloadImages < totalNumberOfImages) {
        if (this.state.page === 1) {
          toast(
            `За запитом "${this.state.query}" знайдено картинок: ${totalNumberOfImages}. Натисни "завантажити ще", щоб отримати ще 12 картинок!`
          );
        } else {
          const moreImages = totalNumberOfImages - alredyDownloadImages;
          toast(
            `За запитом "${this.state.query}" лишилося ще картинок: ${moreImages} із ${totalNumberOfImages}. Натисни "завантажити ще", щоб отримати ще 12 картинок!`
          );
        }
        this.setState({ showBtnLoadMore: true });
      } else {
        toast(
          `Це всі результати за запитом "${this.state.query}". Більше результатів нема!`
        );
        this.setState({ showBtnLoadMore: false });
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }

  onSubmitSearchBtn = text => {
    this.setState({ query: text, imagesArray: [], page: 1 });
    this.getFromApi(text, 1);
  };

  onBtnClickMore = () => {
    this.getFromApi(this.state.query, this.state.page + 1);
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  togleModal = () => {
    this.setState(prev => ({
      showModal: !prev.showModal,
    }));
  };

  addImgLink = link => {
    this.setState({ imageLink: link });
  };

  render() {
    return (
      <>
        <ToastContainer autoClose={3000} />
        <SearchBar onSubmit={this.onSubmitSearchBtn} />
        {this.state.isLoading && <Loader />}
        {this.state.showModal && (
          <Modal
            imageLink={this.state.imageLink}
            togleModal={this.togleModal}
          />
        )}
        {this.state.imagesArray.length > 0 && (
          <ImageGallery
            images={this.state.imagesArray}
            addImgLink={this.addImgLink}
            togleModal={this.togleModal}
          />
        )}
        {this.state.showBtnLoadMore && <Button onClick={this.onBtnClickMore} />}
      </>
    );
  }
}

export default App;

App.propTypes = {
  imagesArray: PropTypes.array,
  query: PropTypes.string,
  showModal: PropTypes.bool,
  imageLink: PropTypes.string,
  page: PropTypes.number,
  showBtnLoadMore: PropTypes.bool,
  isLoading: PropTypes.bool,
};
