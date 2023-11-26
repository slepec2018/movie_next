import { useRouter } from 'next/router';


export default function Error({ statusCode }) {
  const router = useRouter();

  const handleTryAgain = () => {
    router.push('/');
  };

  return (
    <div className="text-center mt-10">
      <h1>{statusCode ? `Mistake ${statusCode}` : 'Something went wrong'}</h1>
      <button className="hover:text-amber-600" onClick={handleTryAgain}>
        Try Again
      </button>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
