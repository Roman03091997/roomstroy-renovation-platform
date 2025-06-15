import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import Home from "@/pages/home";

// Lazy load тяжелые страницы
const Marketing = lazy(() => import("@/pages/marketing"));
const Management = lazy(() => import("@/pages/Management"));

function Router() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      }>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/site" component={Home} />
          <Route path="/client" component={Home} />
          <Route path="/marketing" component={() => (
            <div className="min-h-screen bg-gray-50">
              <Navigation />
              <Marketing />
            </div>
          )} />
          <Route path="/management" component={() => (
            <div className="min-h-screen bg-gray-50">
              <Navigation />
              <Management />
            </div>
          )} />
          <Route path="/admin" component={() => (
            <div className="min-h-screen bg-gray-50">
              <Navigation />
              <div className="max-w-6xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Административная панель</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <a href="/marketing" className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">Маркетинг</h3>
                    <p className="text-gray-600">Управление маркетинговыми кампаниями</p>
                  </a>
                  <a href="/management" className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">Управление</h3>
                    <p className="text-gray-600">Тендеры и Яндекс Директ</p>
                  </a>
                </div>
              </div>
            </div>
          )} />
          <Route>
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">404 - Страница не найдена</h1>
                <a href="/" className="text-primary hover:underline">Вернуться на главную</a>
              </div>
            </div>
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
