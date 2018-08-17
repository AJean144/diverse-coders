module Api
    module V1
        class JobPostsController < ApplicationController
            def index
                job_posts = JobPost.order('created_at DESC')
                render json: {status: 'SUCCESS', message: 'Loaded Job Posts', jobs: job_posts}, status: :ok
            end

            def show
                job_post = JobPost.find(params[:id])
                render json: {status: 'SUCCESS', message: 'Loaded Job Post', job: job_post}, status: :ok
            end

            def create
                job_post = JobPost.new(job_post_perams)

                if job_post.save
                    render json: {status: 'SUCCESS', message: 'Created Job Post', job: job_post}, status: :ok
                else
                    render json: {status: 'ERROR', message: 'Unable to save Job Post', job: job_post.errors}, status: :unprocessable_entity
                end
            end

            def update
                job_post = JobPost.find(params[:id])
                if job_post.update_attributes(job_post_perams)
                    render json: {status: 'SUCCESS', message: 'Updated Job Post', job: job_post}, status: :ok
                else
                    render json: {status: 'ERROR', message: 'Unable to update Job Post', job: job_post.errors}, status: :unprocessable_entity
                end
            end

            def destroy
                job_post = JobPost.find(params[:id])
                job_post.destroy
                render json: {status: 'SUCCESS', message: 'Deleted Job Post', job: job_post}, status: :ok
            end

            private 

            def job_post_perams
                params.permit(
                    :title,
                    :category,
                    :headquarters,
                    :job_description,
                    :how_to_apply,
                    :company_name,
                    :company_website,
                    :company_email,
                    :company_statement,
                    :logo,
                    :company_info
                )
            end
        end
    end
end