import MainLayout from './components/MainLayout';

function App() {
  return (
    <MainLayout>
      {/* This is the content specific to our homepage */}
      <div className="min-h-screen bg-slate-100 flex justify-center items-center">
        <h1 className="text-4xl font-bold text-slate-700">
          Homepage Content Area
        </h1>
      </div>
    </MainLayout>
  );
}

export default App;