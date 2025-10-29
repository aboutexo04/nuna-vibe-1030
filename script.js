const API_KEY = 'f33a64de9684754b32d708d2b90525b5';
const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const IMAGE_FALLBACK = 'https://via.placeholder.com/500x750?text=No+Image';

const moviesContainer = document.getElementById('moviesContainer');
const loading = document.getElementById('loading');

// 영화 데이터 가져오기
async function fetchMovies() {
    try {
        loading.classList.remove('hidden');
        moviesContainer.innerHTML = '';

        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.results && data.results.length > 0) {
            displayMovies(data.results);
        } else {
            showError('상영중인 영화를 찾을 수 없습니다.');
        }
    } catch (error) {
        console.error('Error fetching movies:', error);
        showError('영화 정보를 불러오는 중 오류가 발생했습니다. 나중에 다시 시도해주세요.');
    } finally {
        loading.classList.add('hidden');
    }
}

// 영화 카드 표시
function displayMovies(movies) {
    moviesContainer.innerHTML = '';
    
    movies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        moviesContainer.appendChild(movieCard);
    });
}

// 영화 카드 생성
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    const movieTitle = movie.original_title || movie.title;

    const posterPath = movie.poster_path 
        ? `${IMAGE_BASE_URL}${movie.poster_path}`
        : IMAGE_FALLBACK;

    const img = document.createElement('img');
    img.className = 'movie-poster';
    img.src = posterPath;
    img.alt = movieTitle;
    img.loading = 'lazy';
    
    // 이미지 로드 실패 시 fallback 사용
    img.onerror = function() {
        this.src = IMAGE_FALLBACK;
    };

    // 개봉일 포맷팅 (YYYY-MM-DD 형식 유지)
    const releaseDate = movie.release_date 
        ? movie.release_date
        : 'N/A';

    // 포스터 하단에 개봉일 표시
    const dateOverlay = document.createElement('div');
    dateOverlay.className = 'date-overlay';
    dateOverlay.textContent = `Released: ${releaseDate}`;

    card.appendChild(img);
    card.appendChild(dateOverlay);

    return card;
}

// 에러 메시지 표시
function showError(message) {
    moviesContainer.innerHTML = `
        <div class="error-message">
            <p>${message}</p>
        </div>
    `;
}

// 페이지 로드 시 영화 데이터 가져오기
document.addEventListener('DOMContentLoaded', fetchMovies);
