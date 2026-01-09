
import React, { useState } from 'react';
import { PageType } from './types';
import Home from './views/Home';
import PublicShow from './views/PublicShow';
import UserProfile from './views/UserProfile';
import ProjectDetail from './views/ProjectDetail';
import LogicAnalysis from './views/LogicAnalysis';
import CategoryList from './views/CategoryList';
import ArticleDetail from './views/ArticleDetail';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>(PageType.HOME);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const navigateToDetail = (id: string) => {
    setSelectedProjectId(id);
    setCurrentPage(PageType.DETAIL);
  };

  const navigateToCategory = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(PageType.CATEGORY_LIST);
  };

  const navigateToArticle = (id: string) => {
    setSelectedArticleId(id);
    setCurrentPage(PageType.ARTICLE_DETAIL);
  };

  const renderPage = () => {
    switch (currentPage) {
      case PageType.HOME:
        return (
          <Home 
            onNavigateDetail={navigateToDetail} 
            onNavigateCategory={navigateToCategory}
            onNavigateArticle={navigateToArticle}
            onShowLogic={() => setCurrentPage(PageType.LOGIC)} 
          />
        );
      case PageType.CATEGORY_LIST:
        return (
          <CategoryList 
            category={selectedCategory} 
            onBack={() => setCurrentPage(PageType.HOME)} 
            onNavigateDetail={navigateToDetail}
          />
        );
      case PageType.ARTICLE_DETAIL:
        return (
          <ArticleDetail 
            id={selectedArticleId!} 
            onBack={() => setCurrentPage(PageType.HOME)} 
          />
        );
      case PageType.PUBLIC_SHOW:
        return <PublicShow />;
      case PageType.USER:
        return <UserProfile onNavigateDetail={navigateToDetail} />;
      case PageType.DETAIL:
        return <ProjectDetail id={selectedProjectId!} onBack={() => setCurrentPage(PageType.HOME)} />;
      case PageType.LOGIC:
        return <LogicAnalysis onBack={() => setCurrentPage(PageType.HOME)} />;
      default:
        return <Home onNavigateDetail={navigateToDetail} onNavigateCategory={navigateToCategory} onNavigateArticle={navigateToArticle} onShowLogic={() => setCurrentPage(PageType.LOGIC)} />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen relative flex flex-col shadow-2xl">
      {/* View Container */}
      <div className="flex-1 overflow-y-auto pb-20 no-scrollbar">
        {renderPage()}
      </div>

      {/* TabBar */}
      {![PageType.DETAIL, PageType.LOGIC, PageType.CATEGORY_LIST, PageType.ARTICLE_DETAIL].includes(currentPage) && (
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t flex justify-around py-2 safe-bottom z-50">
          <button 
            onClick={() => setCurrentPage(PageType.HOME)}
            className={`flex flex-col items-center space-y-1 ${currentPage === PageType.HOME ? 'text-red-500' : 'text-gray-400'}`}
          >
            <i className="fa-solid fa-house text-xl"></i>
            <span className="text-[10px] font-medium">首页</span>
          </button>
          <button 
            onClick={() => setCurrentPage(PageType.PUBLIC_SHOW)}
            className={`flex flex-col items-center space-y-1 ${currentPage === PageType.PUBLIC_SHOW ? 'text-red-500' : 'text-gray-400'}`}
          >
            <i className="fa-solid fa-heart-pulse text-xl"></i>
            <span className="text-[10px] font-medium">公益秀</span>
          </button>
          <button 
            onClick={() => setCurrentPage(PageType.USER)}
            className={`flex flex-col items-center space-y-1 ${currentPage === PageType.USER ? 'text-red-500' : 'text-gray-400'}`}
          >
            <i className="fa-solid fa-user text-xl"></i>
            <span className="text-[10px] font-medium">我的</span>
          </button>
        </nav>
      )}
    </div>
  );
};

export default App;
